---
title: "Summarising text Using BART and T5"
description: "In this project, automatic text summarisation was explored BART and T5 models. Both models perform well on a variety of tasks out-of-the-box such as translation, questions answering and summarisation. The aim here, however, was to test their effectiveness on text summarisation. The models gave very good outputs which can be primed further by changing the pre-train files and hyperparameter tuning."
order: 5
technologies: ["Python", "Transformer"]
concepts: ["Text Summarisation"]
---

![text-summarisation](/assets/images/portfolio/tekxt.png)

Text summarization is the process of distilling the most important information from a source text to produce an abridged version for a particular user and task.

Humans conduct the text summarization task as we have the capacity to understand the meaning of a text document and extract salient features to summarize the documents using our own words.

However, automatic methods for text summarization are crucial in today’s world where there is a lack of workers as well as time to interpret the data. Therefore, in this project I will explore text summarization models BART and T5 to achieve automatic summarization.

## Method

BART is a Seq2Seq model that performs well on multiple tasks like abstractive dialogue, question answering and summarization.

T5 is an encoder-decoder model pre-trained on a multi-task mixture of unsupervised and supervised tasks and for which each task is converted into a text-to-text format. T5 works well on a variety of tasks out-of-the-box such as translation, questions answering and summarisation.

BART and T5 were used for this project as they have been pre-trained. Using them reduced the lead time required for the project completion.

[\[View project on GitHub\]](https://github.com/ndcharles/text-summarization)

<br>

## Discussions

The codes were run in Google Colab and further on local host. The outputs were reasonably good. However, due to the size of pre-trained files, model size is pretty large.
It is to be hosted on heroku for public access since that is the only way to enable public review of the work. However, due to the size of the pre-trained data and the limit of Heroku free-tier, the model couldn't be hosted on there.