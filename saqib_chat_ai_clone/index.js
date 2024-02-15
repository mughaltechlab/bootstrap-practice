console.log('hello world');

const apiKey = "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";
const url = "https://api.openai.com/v1/chat/completions";

// form
const myForm = document.getElementById('form');
// user input
const userInp = document.getElementById('chat-inp');
// save user msg in user-msg
const userMsg = document.querySelector('.user-msg');
//  save AI msg in 
const webMsg = document.querySelector('.web-msg');
const webMsgText = "";
webMsg.innerHTML = webMsgText;

// add event listener on form
myForm.addEventListener('submit',async(e)=>{
    e.preventDefault();
    const userInpV = userInp.value.trim();
    if (userInpV) {
        try {

            const resp = await fetch(url,
                    {
                    method: 'POST',
                    headers: {
                        'Content-Type' : 'application/json' ,
                        'Authorization' : `Bearer ${apiKey}` ,
                    },
                    body: JSON.stringify(
                        {
                            model: "gpt-4",
                            messages: [{"role": "user","content": msg,}],
                            temperature: 1.0,
                            top_p: 0.7,
                            n: 1,
                            stream: false,
                            presence_penalty: 0,
                            frequency_penalty: 0,
                        }
                    ) 
                }
            );
            if (!resp.ok) {
                console.log("network problem");
            }else{
                const data = await resp.json();
                console.log(data);
            }
                
        } catch (error) {
            
        }
    }else{
        console.log('enter something bro;;;');
    }
});

async function getData(msg){
    try {

        const resp = await fetch(url,
                {
                method: 'POST',
                headers: {
                    "Content-Type" : "application/json" ,
                    "Authorization" : `Bearer ${apiKey}` ,
                },
                body: JSON.stringify(
                    {
                        "model": "gpt-4",
                        "messages": [{"role": "user","content": msg,}],
                        'temperature': 1.0,
                        'top_p': 0.7,
                        'n': 1,
                        stream: false,
                        'presence_penalty': 0,
                        'frequency_penalty': 0,
                    }
                ) 
            }
        );
        if (!resp.ok) {
            console.log("network problem");
        }else{
            const data = await resp.json();
            console.log(data);
        }
            
    } catch (error) {
        
    }
}