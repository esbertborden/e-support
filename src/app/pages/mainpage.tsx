import { useRouter } from "next/dist/client/components/navigation";
import { useState } from "react";

const ProfilePin = () => {
    return (
        <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm">
                U
            </div>
            <span className="text-sm font-medium text-gray-700">Profile</span>
        </div>
    );
};

const TabsSection = () => {
    const [activeTab, setActiveTab] = useState<"overview" | "activity" | "details">("overview");
    const router = useRouter();

    const tabButton = (tab: typeof activeTab, label: string) => (
        <button
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-sm font-medium rounded-md transition
                ${
                    activeTab === tab
                        ? "bg-blue-600 text-white"
                        : "text-gray-600 hover:bg-gray-100"
                }`}
        >
            {label}
        </button>
    );

    const handleRedirect = (link: string) => {
        router.push(link); // Redirect to another page/link
    };

    return (
        <div className="min-h-screen w-full bg-gray-50 p-8 flex flex-col">
            {/* Tabs Header */}
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-gray-800">Tabs Section</h2>
                <div className="flex gap-2">
                    {tabButton("overview", "Overview")}
                    {tabButton("activity", "Activity")}
                    {tabButton("details", "Details")}
                </div>
            </div>

            {/* Tab Content */}
            <div className="flex-1 bg-white rounded-xl shadow p-6 overflow-auto">
                {activeTab === "overview" && (
                    <div className="flex flex-col gap-4">
                        <p>Overview content goes here.</p>
                        <button
                            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 w-32"
                            onClick={() => handleRedirect("/overview/form")}
                        >
                            Go to Form
                        </button>
                    </div>
                )}

                {activeTab === "activity" && (
                    <div className="flex flex-col gap-4">
                        <p>Activity content goes here.</p>
                        <button
                            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 w-32"
                            onClick={() => handleRedirect("/activity/form")}
                        >
                            Go to Form
                        </button>
                    </div>
                )}

                {activeTab === "details" && (
                    <div className="flex flex-col gap-4">
                        <p>Details content goes here.</p>
                        <button
                            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 w-32"
                            onClick={() => handleRedirect("/details/form")}
                        >
                            Go to Form
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

const MainPage = () => {
    const [activeMenu, setActiveMenu] = useState<
        "home" | "tabs" | "settings" | "bankStatement" | "chequeBalance" | "requestCustomerInfo"
    >("home");

    const menuButton = (menu: typeof activeMenu, label: string) => (
        <button
            onClick={() => setActiveMenu(menu)}
            className={`px-4 py-2 text-sm font-medium rounded-md transition w-full text-left
                ${
                    activeMenu === menu
                        ? "bg-blue-600 text-white"
                        : "text-gray-600 hover:bg-gray-100"
                }`}
        >
            {label}
        </button>
    );

    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <aside className="w-60 bg-white shadow-md flex flex-col justify-between p-6">
                <div className="flex flex-col gap-2">
                    {menuButton("home", "Home")}
                    {menuButton("bankStatement", "Bank Statement")}
                    {menuButton("chequeBalance", "Cheque Balance")}
                    {menuButton("requestCustomerInfo", "Request Customer Info")}
                    {menuButton("settings", "Settings")}
                </div>

                <div className="mt-4">
                    <ProfilePin />
                </div>
            </aside>

            {/* Main content */}
            <main className="flex-1 bg-gray-100 p-6">
                {activeMenu === "home" && (
                    <div className="bg-white rounded-xl shadow p-8 flex flex-col justify-center items-center w-full h-full">
                        <h1 className="text-6xl font-bold text-gray-800 mb-8">
                            Home
                        </h1>
                        <p className="text-lg text-gray-600 text-center">
                            Welcome to the home section of E-Support.
                        </p>
                    </div>
                )}

                {activeMenu === "tabs" && <TabsSection />}

                {activeMenu === "settings" && (
                    <div className="bg-white rounded-xl shadow p-6 w-full h-full">
                        <h1 className="text-xl font-semibold text-gray-800 mb-2">
                            Settings
                        </h1>
                        <p className="text-gray-600">
                            Manage your preferences and account settings here.
                        </p>
                    </div>
                )}

                {activeMenu === "bankStatement" && (
                    <div className="bg-white rounded-xl shadow p-6 w-full h-full">
                        <h1 className="text-xl font-semibold text-gray-800 mb-2">
                            Bank Statement
                        </h1>
                        <p className="text-gray-600">
                            View your bank statements and transaction history here.
                        </p>
                    </div>
                )}

                {activeMenu === "chequeBalance" && (
                    <div className="bg-white rounded-xl shadow p-6 w-full h-full">
                        <h1 className="text-xl font-semibold text-gray-800 mb-2">
                            Cheque Balance
                        </h1>
                        <p className="text-gray-600">
                            Check your current cheque balance here.
                        </p>
                    </div>
                )}

                {activeMenu === "requestCustomerInfo" && (
                    <div className="bg-white rounded-xl shadow p-6 w-full h-full">
                        <h1 className="text-xl font-semibold text-gray-800 mb-2">
                            Request Customer Info
                        </h1>
                        <p className="text-gray-600">
                            Request and view customer information in this section.
                        </p>
                    </div>
                )}
            </main>
        </div>
    );
};

export default MainPage;