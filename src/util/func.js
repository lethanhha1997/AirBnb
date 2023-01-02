import { notification } from 'antd'

const getNotificationStyle = type => {
    return {
        success: {
            color: 'rgba(0, 0, 0, 0.65)',
            border: '1px solid #b7eb8f',
            backgroundColor: '#f6ffed'
        },
        warning: {
            color: 'rgba(0, 0, 0, 0.65)',
            border: '1px solid #ffe58f',
            backgroundColor: '#fffbe6'
        },
        error: {
            color: 'rgba(0, 0, 0, 0.65)',
            border: '1px solid #ffa39e',
            backgroundColor: '#fff1f0'
        },
        info: {
            color: 'rgba(0, 0, 0, 0.65)',
            border: '1px solid #91d5ff',
            backgroundColor: '#e6f7ff'
        }
    }[type]
}

export const openCustomNotificationWithIcon = (type = 'success', title = "title", description = "description", placement = "top") => {
    notification[type]({
        message: title,
        description,
        placement,
        style: getNotificationStyle(type),
        duration: 2,
    });
};