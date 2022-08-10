---
layout: post
title:  "Anscombe's Quartet and the Dinosaurus "
author: ndcharles
categories: [ Data]
image: assets/images/anscombe_dinosaurus.webp)
Last_modified: 
tags: [anscombe, dinosaurus, visualization, summary_statistics]
---
Before you type df.describe() on that dataset and rush to tell us what you find, have you heard of Anscombe's Quartet? Probably not.

Anscombe's Quartet is a set of four datasets where each produces the same summary statistics (mean, standard deviation, and correlation), and could lead one to believe the datasets are quite similar. However, after visualizing (plotting) the data, it becomes clear that the datasets are remarkedly different.1

### History of the Anscombe's Quartet 



While very popular and effective for illustrating the importance of data visualisation, the Anscombe's Quartet have been around for nearly 45 years, and it is not known how Anscombe came up with his datasets. 

### The Dinosaurus Dozen
More recently, Alberto Cairo created the Datasaurus dataset, which is amazingly insightful but is built on the same idea as the Anscombe's Quartet, "never trust summary statistics alone; always visualize your data". To prove the point, 

The Datasaurus dozen is made up of 13 datasets (the Datasaurus, plus 12 others) each having the same summary statistics (x/y mean, x/y standard deviation, and Pearson's correlation) to two decimal places, while the data exhibits normal seeming statistics, plotting the data reveals a picture of a dinosaur.


The datasaurus dozen download: https://www.autodesk.com/content/dam/autodesk/www/autodesk-reasearch/Publications/pdf/The%20Datasaurus%20Dozen.zip



References:
1. https://www.autodesk.com/research/publications/same-stats-different-graphs




