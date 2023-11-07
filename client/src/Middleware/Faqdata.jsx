import { FaqItem_1 } from "../Components/FaqItem_1";
import { FaqItem_2 } from "../Components/FaqItem_2";
import { FaqItem_3 } from "../Components/FaqItem_3";
import { FaqItem4 } from "../Components/FaqItem4";
import { FaqItem_5 } from "../Components/FaqItem_5";
import { FaqItem_6 } from "../Components/FaqItem_6";
import { FaqItem_7 } from "../Components/FaqItem_7";
const faqData = [
    {
        question: '1. How to Install Customer Dashboard Pro',
        answer: <FaqItem_1 />,
        filteranswer:'Installation of customer dashboard pro is very easy. click here to install the customer dashboard pro app. A. First of all, select the theme on your store. App default is set to live theme B. Then after selecting theme click on Manage Installation which will redirect to theme app embed  C. After going to Embed App, turn on the Customer Dashboard Pro extension. D. Click Save and you are done!'
    },
    {
        question: '2. What to do if the Customer Dashboard Pro App is not working on your account page.',
        answer: <FaqItem_2/>,
        filteranswer:"There's 2 reasons this can happen: Your store might be using a custom theme which just means our app got a little confused and wasn't able to find a place to hook onto. No worries though, just email us at support@customerdashboard.pro and let us know your store address and that after installation you can't see our app being displayed and we'll request access and get it all fixed up for you. You might have (or previously had) another customer account app' installed that when uninstalled, left behind a bit of a mess of code. No worries though, just email us at support@customerdashboard.pro and let us know your store address and that after installation you can't see our app being displayed and we'll request access and get it all fixed up for you."
    },
    {
        question: '3. How to activate Recently Viewed in your menu?',
        answer: <FaqItem_3/>,
        filteranswer:'A. Recently viewed will be off by default. B. To turn it on, go to the Recently Viewed menu in the Customer Dashboard app menu. C. After clicking on the Recently viewed button, you can see its preview along with it, here you can also make other settings, after this click on the save button to save it and check it by going to the Menu builder. '
    },
    {
        question: '4. How to activate Top ordered products in your menu?',
        answer: <FaqItem4/>,
        filteranswer:'A. Top ordered products will be off by default. B. To turn it on, go to the Top ordered products menu in the Customer Dashboard app menu. C. After clicking on the Top ordered products button, you can see its preview along with it, here you can also make other settings, after this click on the save button to save it and check it by going to the Menu builder. '
    },
    {
        question: '5. How to add a link and page to your Menu ?',
        answer: <FaqItem_5/>,
        filteranswer:'To add one or more menus to your customer account, follow this guide: Select "Menu" from the Menu builder. Then, click on the "Add menu item" button. Choose the type of menu you want to add. After selecting the menu type, save your changes, and the menu will be added to your Menu.'
    },
    {
        question: '6. How to add a profile fields to your profile page?',
        answer: <FaqItem_6/>,
        filteranswer:'To add one or more fields to your customer account profile, follow this guide: Select "Profile" from the profile setup. Then, click on the "Add extra field" button. Choose the type of field you want to add, such as Single line, Multiline, Date, Single choice options, or Multiple choice options. After selecting the field type, save your changes, and the fields will be added to your profile'

    },
    {
        question: '7. How to add translations for customer account page.',
        answer: <FaqItem_7/>,
        filteranswer:'To add multiple translations, follow these steps: First, click on the "Translation" tab in the menu. Next, select the language and click on "Manage" On the new page, you see all the translations, where you can edit translations for different pages. After making changes, click the "Save" button. Save again, and your translations will be saved.'
    }

    // Add more FAQ items here
];

export default faqData;
