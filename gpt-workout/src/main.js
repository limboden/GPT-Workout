import { createApp } from 'vue'
import App from './App.vue'

// import { Configuration, OpenAIApi } from "openai";


// const configuration = new Configuration({
//   organization: "org-I6DQ77co3qIhsdPR2OPdfB8U",
//   apiKey: "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",
// });

// const openai = new OpenAIApi(configuration);

// const completion = await openai.createChatCompletion({
//   model: "gpt-3.5-turbo",
//   messages: [
//     { role: "user", content: "Hello World" },
//   ]

// })

// console.log(completion.data.choices[0].message);

createApp(App).mount('#app')
