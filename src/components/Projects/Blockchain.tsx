import React from "react";
import Project from "../Project";
import projectData from "../../data/projectData";

function Blockchain() {
    return (
        <>
            <Project project={projectData.Blockchain} childrenAfter={<ChildrenAfter/>}/>
        </>
    )
}

const ChildrenAfter = () => {
    return (
        <>
            <p><strong>Details:</strong> The program does the following:</p>
            <ol>
                <li>Initializes a Message Service that:</li>
                <ol>
                    <li>Creates a group of users - each with their own private/public keys, SHA256 signature, and
                        starting Virtual Currency balance.
                    </li>
                    <li>Creates a random number of transactions and validates each one for funds and authenticity.
                    </li>
                </ol>
                <li>Initializes a Zero Service that will increase/decrease the number of leading zeros required to
                    dynamically control the Block mining times.
                </li>
                <li>Performs the mining operations for each Block until the requested number of blocks have been
                    generated:
                </li>
                <ol>
                    <li>Saves simple (for display) and complex (for authentication) version of the transaction
                        string for synchronized use of the threads.
                    </li>
                    <li>Creates an ExecutorService and loads a thread for each processor core - 1 with a mining
                        task.
                    </li>
                    <li>Each thread will perform the following tasks:</li>
                    <ol>
                        <li>Save a copy of the shared variables to reduce variable acquisition/synchronization times
                            for each thread.
                        </li>
                        <li>Generate a random Unique Block Identification code.</li>
                        <li>For each iteration, perform the following:</li>
                        <ol>
                            <li>Generate a random Magic Number</li>
                            <li>Generate a hash accounting for all unique elements of the Block - the miner, Unique
                                Block Identifier, Magic Number, hash code from the previous Block, authentication
                                string of the transaction data.
                            </li>
                            <li>Check if the randomly generated hash code from above meets the Zero Requirement (the
                                number of leading zeros required).
                            </li>
                            <li>If successful, return the valid block, else perform the next iteration.</li>
                        </ol>
                    </ol>
                    <li>Executes the threads with the invokeAny method to shutdown all mining threads once a single
                        one has found a solution.
                    </li>
                    <li>Once a return is successful, it will validate the mined Block, add it to the chain, provide
                        mining time feedback to the zero service.
                    </li>
                </ol>

            </ol>
        </>
    )
}



export default Blockchain;
