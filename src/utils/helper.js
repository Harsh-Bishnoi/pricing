import { checkIcon } from "./icon";

export const MONTHLY_DATA = [
    {
        title: "Free",
        month: "$00",
        span: "/month",
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
        month: "$10",
        span: "/month",
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
        month: "$25",
        span: "/month",
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
