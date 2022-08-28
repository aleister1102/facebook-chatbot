function EventListTemplate(eventList) {
    return {
        attachment: {
            type: 'template',
            payload: {
                template_type: 'generic',
                elements: [
                    ...eventList,
                    {
                        title: `Trở về`,
                        buttons: [
                            {
                                type: 'postback',
                                title: 'Quay về menu chính',
                                payload: `MAIN_MENU`,
                            },
                        ],
                    },
                ],
            },
        },
    }
}

function EventDetailsTemplate(event) {
    return {
        attachment: {
            type: 'template',
            payload: {
                template_type: 'generic',
                elements: [
                    {
                        title: `${event.name}`,
                        subtitle: `Thời gian: ${event.time || ''}\nĐịa điểm: ${
                            event.location
                        }`,
                    },
                ],
            },
        },
    }
}

module.exports = { EventListTemplate, EventDetailsTemplate }
