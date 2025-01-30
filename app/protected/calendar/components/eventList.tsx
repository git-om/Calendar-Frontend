import { handleEventLogout } from "../hooks/logout";

export default function EventList({ events, router }: any) {
    
    return (
        <>
            <div className="mt-4 flex-1 overflow-hidden">
                <h4 className="font-semibold text-gray-700 mb-2">Your Events:</h4>
                <div className="overflow-y-auto max-h-[250px]">
                    <ul className="space-y-4">
                        {events.map((event: any) => (
                            <li
                                key={event.id}
                                className="border border-gray-300 p-3 rounded-lg hover:shadow-md transition duration-300"
                            >
                                <strong className="text-lg text-gray-800">
                                    {event.title}
                                </strong>{" "}
                                <br />
                                <span className="text-gray-600 text-sm">
                                    {new Intl.DateTimeFormat("en-US", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                        weekday: "short",
                                        hour: "2-digit",
                                        minute: "2-digit",
                                        hour12: true,
                                        timeZone: "UTC",
                                    }).format(new Date(event.start))}{" "}
                                    -{" "}
                                    {new Intl.DateTimeFormat("en-US", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                        weekday: "short",
                                        hour: "2-digit",
                                        minute: "2-digit",
                                        hour12: true,
                                        timeZone: "UTC",
                                    }).format(new Date(event.end))}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <button
                onClick={() => handleEventLogout(router)}
                className="w-full bg-red-500 text-white p-3 rounded-lg mt-6 hover:bg-red-600 focus:outline-none transition duration-200"
            >
                Log out
            </button>
        </>
    );
}