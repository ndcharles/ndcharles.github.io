---
layout: post
title:  "Advanced Prompt Engineering"
author: ndcharles
categories: [ Data, Tech]
image: assets/images/advanced_prompt_engineering.webp
Last_modified: 
tags: [prompt_engineering, reference, chatGPT, copilot]
---
Generative AI refers to tools that can create new content, such as articles or images, similar to human capabilities. This technology is expected to significantly impact various industries by automating creative tasks, saving time, and reducing costs.

By providing clear instructions (prompts), users can leverage generative AI to perform tasks efficiently. It can write essays, solve math problems, generate marketing content, analyze data, question-answering, sentiment analysis, language translation, coding and more.

> No matter what happens with AI, being able to have good ideas and communicate them effectively will continue to be important. -- [Sam Altman](https://www.saxifrage.xyz/post/prompt-engineering)

Prompt engineering is the process of crafting and refining inputs (prompts) to guide AI models in generating specific, high-quality outputs. It includes writing, optimizing, and iterating prompts to improve accuracy and effectiveness. This process helps AI models understand and perform tasks based on the provided instructions. Prompt engineering is also known as prompt design and is essential for enhancing AI performance on particular tasks.

> Prompt engineering is the practice of creating the perfect questions or instructions to get exactly what you need from an AI solution. They help us communicate with these machines to perform different tasks such as writing, analyzing data, text generation, question-answering, sentiment analysis, language translation and coding.

## Prompt engineering is iterative
Getting the best output from an AI system requires an iterative process.
- Try something, be clear and specific
- Analyze whether the result is desired or not
- Clarify instructions, give the system time to think
- Refine the idea and the prompt with few shots of examples
- Rinse and repeat

## Basic techniques 
These are tips that the average user already uses to make their prompts better.[^1]

-- **Role-playing.** By making the model act as a specific entity, like a historian or a scientist, you can get tailored responses. For example, "As a nutritionist, evaluate the following diet plan" might yield a response grounded in nutritional science.

-- **Iterative refinement.** Start with a broad prompt and gradually refine it based on the model's responses. This iterative process helps in honing the prompt to perfection.

-- **Feedback loops.** Use the model's outputs to inform and adjust subsequent prompts. This dynamic interaction ensures that the model's responses align more closely with user expectations over time.

```
Article in progress
```

## Advanced prompt engineering
Many advanced prompting techniques have been designed to improve performance on complex tasks. [^2]
- Reference prompting
- Zero-shot 
- Few-shot 
- Chain-of-thought
- Generated knowledge
- Train of thought prompting
- Directional stimulus prompting
- Chain of density prompting

--1. **Reference prompting** (also contextual prompting or reference text prompting): This involves providing context or reference materials to your query which then guides the model's response. This is used when you want specific responses and have access to supporting materials for context. This context can be a passage, a set of instructions or any other relevant information.<br>
Examples of Reference prompting 

a. Text summarization

```
Prompt: Summarize the following text:
Reference Text: "Quantum computing leverages quantum mechanical phenomena to perform calculations exponentially faster than classical computers. It has the potential to revolutionize fields such as cryptography, materials science, and artificial intelligence. However, current quantum computers are still in the experimental stage and face significant technical challenges."
```

```
Response: "Quantum computing uses quantum mechanics to perform fast calculations and has potential applications in cryptography and AI, but it is still experimental and faces technical challenges."
```

--2. **Zero-shot**: Zero-shot involves providing the model with a task it hasn't seen during its training. It tests the model's ability to generalize and produce relevant outputs without relying on prior examples. It’s akin to asking someone to perform a task they’ve never done before without any specific instructions or examples

--3. **Few-shot/in-context learning:** Shots refer to examples you provide the AI before allowing it to attempt a task. Few-shot learning gives the model a few example outputs to help it learn what is expected for a particular task; voice, tone and keywords. This case is likened to creating a pattern and the AI tries to match the pattern.

Examples of zero-shot and few-shot learning 

a. Text Classification 

<pre>
<b>Zero-shot</b>
"Classify the following text into categories: sports, politics, technology, or entertainment: 'The team secured a victory in the final seconds.'"

<b>Few-shot</b>
"Classify the following text into categories: sports, politics, technology, or entertainment: 
- 'The government passed a new bill yesterday.' (politics)
- 'Innovative startups are leading the way in AI development.' (technology)
- 'The championship game will be held next weekend.' (sports)
- 'The concert was a huge success with thousands attending.' (entertainment)
- 'A new app is changing the way we manage our daily tasks.'"
</pre>

b. Translation

<pre>
<b>Zero-shot</b>
"Translate this sentence into French: ‘Hello, how are you today?’"

<b>Few-shot</b>
"Translate these sentences into French:
- 'The sky is clear today.' (Le ciel est dégagé aujourd'hui.)
- 'I will meet you at the park.' (Je te rencontrerai au parc.)
- 'Can you help me with my homework?'"
</pre>

c. Summarization

<pre>
<b>Zero-shot</b>
"Provide a summary for this article: ‘Researchers have discovered a new method to recycle plastics.'"

<b>Few-shot</b>
"Provide a summary for these articles:
- 'Scientists have found a potential cure for a rare disease.' (Researchers may have discovered a treatment for a rare illness.)
- 'The stock market experienced significant growth last quarter.' (The financial market saw considerable gains in the previous quarter.)
- 'A new species of bird has been discovered in the Amazon rainforest.'"
</pre>

d. Question Answering

<pre>
<b>Zero-shot</b>
"What is the capital city of France?"

<b>Few-shot</b>
"Answer these questions based on the information provided:
- 'What is the boiling point of water?' (100°C)
- 'Who wrote the play Romeo and Juliet?' (William Shakespeare)
- 'How long is the Great Wall of China?'"
</pre>

e. Sentiment Analysis

<pre>
<b>Zero-shot</b>
"Determine the sentiment of this review: 'The movie was a thrilling adventure from start to finish.'"

<b>Few-shot</b>
"Determine the sentiment of these reviews:
- 'This is the best restaurant in town!' (Positive)
- 'I'm disappointed with the service I received.' (Negative)
- 'The book was quite interesting, though it had a slow start.'"
</pre>

--4. **Chain-of-thought (CoT):** this inves creating a logical sequence on how the response should go. It involves, referencing, few-shots and/or zero+few-shots. Let's take this step-by-step

--5. Take a deep breath and work step-by-step. This instruction makes the AI start in a detailed stepwise manner

--5. **Generated knowledge:** this is where examples are first generated by the AI using few-shots prompting then the response is then used to get further detailed responses.

--6. **Train of thought prompting:** This involves getting the AI to generate several responses and eliminates the wrong answer by itself.

--7. **Directional stimulus prompting:** This can be straightforward as it uses reference prompting but then provides a hint on what piece of information should be highlighted from the original text. Example, summary of a text input that should include a hint, the location of the xter. This is good for essay questions 

--8. **Chain of density prompting:** Used to summarise huge texts into a solid summary and then checking that it is correct; all done in one prompt.

[^1]: [What is Prompt Engineering? A Detailed Guide For 2024](https://www.datacamp.com/blog/what-is-prompt-engineering-the-future-of-ai-communication)
[^2]: [Advanced Prompt Engineering Techniques](https://www.linkedin.com/learning/advanced-prompt-engineering-techniques/prompting-to-make-ai-systems-more-useful)

## Further Reading
- [Prompt Engineering Guide from OpenAI](https://platform.openai.com/docs/guides/prompt-engineering/six-strategies-for-getting-better-results)
- [Prompt Engineering Guide from Learn Prompting](https://learnprompting.org/docs/intro)
- [Guides, papers, lecture, notebooks and resources for prompt engineering](https://github.com/dair-ai/Prompt-Engineering-Guide)
- [Prompt Engineering: From Words to Art and Copy](https://www.saxifrage.xyz/post/prompt-engineering)
- [41 Prompt Engineering Courses](https://app.vexpower.com/paths/prompt-engineer/)

### Footnotes
---