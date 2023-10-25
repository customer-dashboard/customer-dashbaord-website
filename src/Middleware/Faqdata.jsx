import { FaqItem_1 } from "../Components/FaqItem_1";
import { FaqItem_2 } from "../Components/FaqItem_2";
import { FaqItem_3 } from "../Components/FaqItem_3";
import { FaqItem4 } from "../Components/FaqItem4";
import { FaqItem_5 } from "../Components/FaqItem_5";
import { FaqItem_6 } from "../Components/FaqItem_6";
import { FaqItem_7 } from "../Components/FaqItem_7";
const faqData = [
    {
        question: 'How to Install Customer Dashboard Pro',
        answer: <FaqItem_1 />,
        filteranswer:'Click the installation button, then select a theme. After that, click the "Manage Installation" button to enable the Customer Dashboard Pro extension, and then click the "Save" button to save your settings.'
    },
    {
        question: 'What to do if the Customer Dashboard Pro App is not working on your account page.',
        answer: <FaqItem_2/>,
        filteranswer:"There's 2 reasons this c an happen: Your store might be using a custom theme which just means our app got a little confused and wasn't able to find a place to hook onto. No worries though, just email us at support@customerdashboard.pro and let us know your store address and that after installation you can't see our app being displayed and we'll request access and get it all fixed up for you. You might have (or previously had) another customer account app' installed that when uninstalled, left behind a bit of a mess of code. No worries though, just email us at support@customerdashboard.pro and let us know your store address and that after installation you can't see our app being displayed and we'll request access and get it all fixed up for you."
    },
    {
        question: 'How to add a link and page to your Menu ?',
        answer: <FaqItem_3/>,
        filteranswer:'To add one or more menus to your customer account, follow this guide: Select "Menu" from the Menu builder. Then, click on the "Add menu item" button. Choose the type of menu you want to add. After selecting the menu type, save your changes, and the menu will be added to your menu.'
    },
    {
        question: 'How to add a profile fields to your profile page ?',
        answer: <FaqItem4/>,
        filteranswer:'To add one or more fields to your customer account profile, follow this guide: Select "Profile" from the profile setup. Then, click on the "Add extra field" button. Choose the type of field you want to add, such as Single line, Multiline, Date, Single choice options, or Multiple choice options. After selecting the field type, save your changes, and the fields will be added to your profile.'
    },
    {
        question: 'How to change color palette of customer account page to match it with your brand color.',
        answer: <FaqItem_5/>,
        filteranswer:'Follow this guide to change your customer account page colors.You can change colors of account page according to your requirement. Go to settings. Select Typography and color.'
    },
    {
        question: 'How to add translations for customer account page.',
        answer: <FaqItem_6/>,
        filteranswer:'Follow our guide to add translations for multi language stores. Select "Translations" from menus. Click on "Manage translations" of those language in which you want to add translations. Then you can change translations of all the word for another language.'

    },
    {
        question: 'How to turn on/off Customer Dashboard Pro Features.',
        answer: <FaqItem_7/>,
        filteranswer:'Select "Toggle features" from menus. Select the feature you want to enable or disable and click button next to it to toggle on or off. Save changes.'
    }

    // Add more FAQ items here
];

export default faqData;
