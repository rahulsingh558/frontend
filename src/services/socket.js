import { io } from 'socket.io-client';

const SOCKET_URL = import.meta.env.DEV ? 'http://localhost:5003' : '';

// Create socket instances for different namespaces
export const createSocket = (namespace) => {
    return io(`${SOCKET_URL}${namespace}`, {
        transports: ['websocket', 'polling'],
        reconnection: true,
        reconnectionDelay: 1000,
        reconnectionAttempts: 5,
    });
};

// Socket namespaces
export const NAMESPACES = {
    LASER_STATUS: '/ws/laser/status',
    TIMETAGGER_STATUS: '/ws/timetagger/status',
    COUNTRATE: '/ws/timetagger/countrate',
    COINCIDENCE: '/ws/timetagger/coincidence',
    CORRELATION: '/ws/timetagger/correlation',
};
