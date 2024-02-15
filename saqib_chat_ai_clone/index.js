console.log('hello world');

const apiKey = "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";
const url = "https://api.openai.com/v1/chat/completions";

// form
const myForm = document.getElementById('form');
const chatPage = document.getElementById('chatpage-userchat');
// user input 
const userInp = document.getElementById('chat-inp');
// save user msg in user-msg
const userMsg = document.querySelector('.user-msg');
//  save AI msg in 
const webMsg = document.querySelector('.web-msg');
const webMsgText = "";
// webMsg.innerHTML = webMsgText;

// add event listener on form
myForm.addEventListener('submit',async(e)=>{
    e.preventDefault();
    const userInpV = userInp.value.trim();
    if (userInpV) {
        
        await getData(userInpV);

    }else{
        console.log('enter something bro;;;');
    }
});

async function getData(userInpV){
    let userDiv = document.createElement('div');    
    userMsgIntegration = `<div id="userchat" class="w-3/4 relative left-1/4 usershadow">
                            <span class="flex items-center justify-end gap-2" href="">
                                <!-- user name -->
                                <span class="font-bold">You</span>
                                <!--user's image -->
                                <img id="userchat-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&usqp=CAU" alt="">
                            </span>
                            <div id="user-msg" class="user-msg pr-2 pl-2">
                                ${userInpV}
                            </div>
                        </div>`;
    userDiv.innerHTML = userMsgIntegration;
    chatPage.append(userDiv);


    console.log(userInpV);
    try {
        resp = await fetch(url,{
            method: 'POST',
            headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${apiKey}`
                    },
            body: JSON.stringify({
                        model: "gpt-3.5-turbo",
                        messages: [{ role: 'user', content: userInpV}],
                    })
        });
        if (!resp.ok) {
        console.log("network problem");
        }else{
            const data = await resp.json();
            // webMsgText = data['choices'][0]['message']['content'];
            let webDiv = document.createElement('div');
            webDiv.innerHTML = `<div id="webchat" class="w-3/4  webshadow">
                                    <span class="flex items-center  gap-2 " href="">
                                        <!--user's image -->
                                        <img id="userchat-img" src="https://tse3.mm.bing.net/th?id=OIP.ixZ69lPCOZ3ZO5UqSHQGIAHaHa&pid=Api&P=0&h=220" alt="">
                                        <!-- user name -->
                                        <span class="font-bold">My Web</span>
                                    </span>
                                    <div id="user-msg" class="web-msg pl-7">
                                        ${data['choices'][0]['message']['content']}
                                    </div>
                                </div>`;
            chatPage.append(webDiv);

            console.log(data);
        }

    } catch (error) {
    console.error(error);
    }
}