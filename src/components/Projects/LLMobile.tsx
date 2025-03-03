import React from "react";
import Project from "../Project";
import projectData from "../../data/projectData";

function LLMobile() {
    return (
        <>
            <Project
                project={projectData.LLMobile}
                childrenBefore={<ChildrenBefore/>}
                childrenAfter={<ChildrenAfter/>}
            >
            </Project>
        </>
    )
}

const ChildrenBefore = () => {
    return (
        <>
            <section>
                <h4>Features</h4>
                <ul>
                    <li>
                        <strong>Onboarding Process:</strong>
                        <ul>
                            <li>Tracks onboarding status and saves user profile information locally using <strong>AsyncStorage</strong>.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Online Menu with Local Caching:</strong>
                        <ul>
                            <li>Fetches the online menu using <code>fetch</code>.</li>
                            <li>Saves the menu locally via <strong>expo-sqlite</strong> to minimize redundant API calls.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Menu Filtering:</strong>
                        <ul>
                            <li>Users can filter menu items by:</li>
                            <ul>
                                <li>Character search (e.g., typing in a search bar).</li>
                                <li>Category selection (e.g., buttons to filter different menu categories).</li>
                            </ul>
                        </ul>
                    </li>
                    <li>
                        <strong>Logout Functionality:</strong>
                        <ul>
                            <li>Allows users to securely log out.</li>
                            <li>Automatically erases all locally stored data (user profile, onboarding status, and cached menu).</li>
                        </ul>
                    </li>
                </ul>
            </section>
            <section>
                <h4>Tech Stack</h4>
                <ul>
                    <li>
                        <strong>React Native:</strong>
                        <ul>
                            <li>Cross-platform framework for building iOS and Android apps.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Expo:</strong>
                        <ul>
                            <li>Simplifies development and supports easy environment configuration.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>AsyncStorage:</strong>
                        <ul>
                            <li>Used to persist user onboarding status and profile information locally.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>expo-sqlite:</strong>
                        <ul>
                            <li>Caches the online menu locally to reduce network calls.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>fetch:</strong>
                        <ul>
                            <li>Fetches the online menu data from the backend.</li>
                        </ul>
                    </li>
                </ul>
            </section>
        </>
    )
}

const ChildrenAfter = () => {
    return null
}



export default LLMobile;
