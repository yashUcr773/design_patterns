const NOTIFICATION_MODE = Object.freeze({
    EMAIL: 'email',
    SMS: 'sms',
    PUSH: 'push',
    WHATSAPP: 'whatsapp',
    IN_APP: 'in app notification',
    SLACK: 'slack'
})

class Notifications {
    strategies = {
        [NOTIFICATION_MODE.EMAIL]: (payload) => console.log('Sending EMAIL', payload),
        [NOTIFICATION_MODE.SMS]: (payload) => console.log('Sending SMS', payload),
        [NOTIFICATION_MODE.PUSH]: (payload) => console.log('Sending PUSH', payload),
        [NOTIFICATION_MODE.WHATSAPP]: (payload) => console.log('Sending WHATSAPP', payload),
        [NOTIFICATION_MODE.IN_APP]: (payload) => console.log('Sending IN_APP', payload),
        [NOTIFICATION_MODE.SLACK]: (payload) => console.log('Sending SLACK', payload),
    }

    send(type, payload) {
        return this.strategies[type](payload)
    }
}

const notifier = new Notifications()
notifier.send(NOTIFICATION_MODE.EMAIL, { to: 'aaa', from: 'bbb', message: "ccc" })
notifier.send(NOTIFICATION_MODE.SMS, { to: 'aaa', from: 'bbb', message: "ccc" })
notifier.send(NOTIFICATION_MODE.PUSH, { to: 'aaa', from: 'bbb', message: "ccc" })
notifier.send(NOTIFICATION_MODE.WHATSAPP, { to: 'aaa', from: 'bbb', message: "ccc" })
notifier.send(NOTIFICATION_MODE.IN_APP, { to: 'aaa', from: 'bbb', message: "ccc" })
notifier.send(NOTIFICATION_MODE.SLACK, { to: 'aaa', from: 'bbb', message: "ccc" })