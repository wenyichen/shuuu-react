import delay from "./delay";

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const trips = [
    {
        id: 0,
        date: new Date().toDateString(),
        depart: "LONG_ADDRESS1",
        dest: "LONG_ADDRESS2",
        status: "Ready",
        driver: "DRIVER_NAME1",
        chats: [
            {
                date: new Date(),
                type: "notification",
                text: "Trip has been created!"
            },
            {
                date: new Date(),
                type: "notification",
                text: "You have been added to the trip (Driver)"
            },
            {
                date: new Date(),
                type: "notification",
                text: "James has requested to join the trip"
            },
            {
                date: new Date(),
                type: "notification",
                text: "You have approved James's request"
            },
            {
                date: new Date(),
                type: "notification",
                text: "James have been added to the trip"
            },
            {
                date: new Date(),
                type: "notification",
                text: "Sam has requested to join the trip"
            },
            {
                date: new Date(),
                type: "notification",
                text: "You have approved Sam's request"
            },
            {
                date: new Date(),
                type: "notification",
                text: "Sam have been added to the trip"
            },
            {
                date: new Date(),
                type: "message",
                text: "Hi!",
                user: "You"
            },
            {
                date: new Date(),
                type: "message",
                text: "Hello!",
                user: "James"
            },
            {
                date: new Date(),
                type: "todo",
                text: "Trip is scheduled for 1/19/19."
            }
        ]
    },
    {
        id: 1,
        date: new Date().toDateString(),
        depart: "LONG_ADDRESS1",
        dest: "LONG_ADDRESS2",
        status: "Ready",
        driver: "DRIVER_NAME1",
        chats: [
            {
                date: new Date(),
                type: "notification",
                text: "Trip has been created!"
            },
            {
                date: new Date(),
                type: "notification",
                text: "You have been added to the trip (Driver)"
            },
            {
                date: new Date(),
                type: "notification",
                text: "James has requested to join the trip"
            },
            {
                date: new Date(),
                type: "notification",
                text: "You have approved James's request"
            },
            {
                date: new Date(),
                type: "notification",
                text: "James have been added to the trip"
            },
            {
                date: new Date(),
                type: "notification",
                text: "Sam has requested to join the trip"
            },
            {
                date: new Date(),
                type: "notification",
                text: "You have approved Sam's request"
            },
            {
                date: new Date(),
                type: "notification",
                text: "Sam have been added to the trip"
            },
            {
                date: new Date(),
                type: "message",
                text: "Hi!",
                user: "You"
            },
            {
                date: new Date(),
                type: "message",
                text: "Hello!",
                user: "James"
            },
            {
                date: new Date(),
                type: "todo",
                text: "Trip is scheduled for 1/19/19."
            }
        ]
    }
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = trip => {
    return "0" + trip.date + trip.depart + trip.dest + trip.driver + "0";
};

class TripApi {
    static getAllTrips() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], trips));
            }, delay);
        });
    }

    static saveTrip(trip) {
        trip = Object.assign({}, trip); // to avoid manipulating object passed in.
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (trip.id) {
                    const existingTripIndex = trip.findIndex(
                        a => a.id == trip.id
                    );
                    trip.splice(existingTripIndex, 1, trip);
                } else {
                    //Just simulating creation here.
                    //The server would generate ids for new accounts in a real app.
                    //Cloning so copy returned is passed by value rather than by reference.
                    trip.id = generateId(trip);
                    trips.push(trip);
                }

                resolve(trip);
            }, delay);
        });
    }

    static deleteTrip(TripId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const indexOfTripToDelete = trips.findIndex(trip => {
                    return trip.TripId == TripId;
                });
                trips.splice(indexOfTripToDelete, 1);
                resolve();
            }, delay);
        });
    }
}

export default TripApi;
