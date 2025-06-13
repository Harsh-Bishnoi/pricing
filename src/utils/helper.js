import { checkIcon } from "./icon";

export const MONTHLY_DATA = [
    {
        title: "Free",
        dollar: "$00",
        month: "/month",
        para: "Perfect for personal use",
        description: [
            { icon: checkIcon, list: "250mb per upload limit" },
            { icon: checkIcon, list: "Unlimited video retention" },
            { icon: checkIcon, list: "Advanced analytics" },
            { icon: checkIcon, list: "Ad-free content delivery" },
            { icon: checkIcon, list: "Priority support" }
        ],
        button: "Get Started"
    },
    {
        title: "Pro",
        dollar: "$10",
        month: "/month",
        para: "For individual creators",
        description: [
            { icon: checkIcon, list: "Up to 10GB per video" },
            { icon: checkIcon, list: "Unlimited video retention" },
            { icon: checkIcon, list: "Advanced analytics" },
            { icon: checkIcon, list: "Ad-free content delivery" },
            { icon: checkIcon, list: "Priority support" }
        ],
        button: "Get Started"
    },
    {
        title: "Creator",
        dollar: "$25",
        month: "/month",
        para: "For content groups",
        description: [
            { icon: checkIcon, list: "Unlimited video size" },
            { icon: checkIcon, list: "Unlimited video retention" },
            { icon: checkIcon, list: "Advanced analytics" },
            { icon: checkIcon, list: "Ad-free content delivery" },
            { icon: checkIcon, list: "Priority support" },
            { icon: checkIcon, list: "Team collaboration" }
        ],
        button: "Get Started"
    }
];
