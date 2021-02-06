---
layout: default
---
<!--- project 1 --->

## Lagos Rent Prediction Web app 

This is an inter-track project which involves the UI/UX team, Data Science team and Sodtware Engineering team.
As part of the data science team, our task is to scrape the necessary data and then develop a machine learning model to help house seekers in Lagos have an idea of how much it would cost them to rent an apartment in locations around Lagos.

### Method

We scrapped contents from [PropertyPro](https://www.propertypro.ng/) and [Nigeria Property Centre](https://nigeriapropertycentre.com/) for rental apartments in Lagos. We went for the data cleaning and ended up scaling down the bedrooms down to just 3. This is owning to the inconsistency in the property listings. EDA was further done using python in a jupyter-lab environment using numpy, pandas, and matplotlib.

Several regression algorithm were tried on the data but we finally settled with [CatBoostRegressor](https://catboost.ai/docs/concepts/python-reference_catboostregressor.html) algorithm. CatBoost is a machine learning algorithm that uses gradient boosting on decision trees. The algorithm was chosen because it has an inbulit method of dealing with categorical variables without affecting model output. Like other boosting models, it is available for hyperparameter tuning and tree pruning.

### Discussions

The model gave the below results:
- Learn {R2: 0.68,  RMSE: 0.60}
- Validation {R2: 0.76,  RMSE: 0.49}

An API was further created using FastAPI to allow the SWE team connect the model. The API method was also beneficial so that the Data team can update the model without much stress.

[View project on GitHub](https://github.com/ndcharles/inter-track-webapp)

<br><br>
<a href="https://www.github.com/ndcharles">View my GitHub profile</a><br>
[Back to Portfolio](https://ndcharles.github.io/)

