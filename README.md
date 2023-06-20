# GPS_Tracking_System Application

This is a GPS Tracking System Application that allows you to save your GPS location and display it on a Google Map. The pin on the map will update as your device's location changes.

## Prerequisites

Before running the application, make sure you have the following dependencies installed:

- Node.js (version 12 or higher)
- npm (Node package manager)

## Getting Started

Follow these steps to run the application locally:

1. Clone the repository:
   git clone git@github.com:Shaykoo/GPS_Tracking_System.git


2. Navigate to the project directory.


3. Install the dependencies:
   npm install


4. Obtain a Google Maps API key by following the [Google Maps API documentation](https://developers.google.com/maps/documentation/javascript/get-api-key).

5. Open the `src/Map.js` file and replace `'MAP_API_KEY'` with your actual Google Maps API key.

6. Save the changes and close the file.

7. Start the development server:
   npm start

8. Open your web browser and visit `http://localhost:3000` to view the application.

## Usage

- The map will display your current location with a pin marker.
- As your device's location changes, the pin marker will move accordingly on the map.

## Technologies Used

- React: JavaScript library for building user interfaces
- google-maps-react: React components for integrating Google Maps

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.


