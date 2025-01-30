export const handleEventResize = async (
    eventResizeInfo: any,
    updateEvent: any,
    refetch: any
) => {
    const { id } = eventResizeInfo.event;
    const start = eventResizeInfo.event.start?.toISOString();
    const end = eventResizeInfo.event.end?.toISOString();
    if (!start || !end) {
        alert("Invalid date range for the event.");
        return;
    }
    try {
        await updateEvent({
            variables: {
                id,
                title: eventResizeInfo.event.title,
                description: eventResizeInfo.event.description,
                start,
                end,
            },
        });
        //   alert("Event updated successfully after resizing.");
        await refetch();
    } catch (err) {
        console.error("Error updating event on resize:", err);
        alert("Failed to update event.");
    }
};