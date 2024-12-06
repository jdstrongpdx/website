import React from "react";
import Project from "../Project";
import projectData from "../../data/projectData";

function NetworkMonitor() {
    return (
        <>
            <Project project={projectData.NetworkMonitor} childrenAfter={<ChildrenAfter/>}/>
        </>
    )
}

const ChildrenAfter = () => {
    return (
        <>
            <p><strong>Details:</strong> The program does uses the following custom classes:</p>
            <ol>
                <li>Service - the base class for all services providing common functionality for sub-class
                    services.
                </li>
                <li>Specific Service implementations - DNS, HTTP, HTTPS, ICMP Echo, ICMP Ping, NTP, TCP, UDP</li>
                <li>Result - the base class for all service results providing common functionality. Specific
                    implementations are written in each specific service implementation (#2 above). Sent between the
                    server and the client as a payload in a Packet object (#4 below).
                </li>
                <li>Packet - a data transfer object between the Server and Client with sender, receiver, payload,
                    timestamp, and status.
                </li>
                <li>Config - a data transfer object that transfers the services and Unique Identifiers between the
                    server and client. Sent in the payload of a Packet object.
                </li>
                <li>StatusEnum - a Enum that controls the current status states of the server, client, each service,
                    and every Packet. It is also used to control the information flow between the server and client
                    by sending change of state requests such as config, resume, pause, and shutdown. Is carried in
                    each Result object and each Packet object.
                </li>
                <li>Setup - a class that stores the Network Monitor configuration and allows it to be serialized for
                    saving/loading configuration data.
                </li>
                <li>RunServices - uses multi-threading to asynchronously run each service and deliver the test
                    Result objects to a common deque for transmission to the client from the server.
                </li>
                <li>ManagementService - performs the Management Service Requirements as outlined in the assignment
                    using the above classes.
                </li>
                <li>MonitoringService - performs the Monitoring Service Requirements as outlined in the assignment
                    using the above classes.
                </li>
                <li>App - provides the UI for configuring the program and running it.</li>
            </ol>

            <p><strong>Credits:</strong> Created by Joel Strong. Network monitoring service examples, Echo Server & Client code, RunServices example code, and
                various other parts of this program used source code provided by Professor Bram Lewis at Oregon
                State University.</p>
        </>
    )
}



export default NetworkMonitor;
