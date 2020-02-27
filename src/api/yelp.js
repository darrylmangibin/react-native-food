import axios from 'axios';

export default axios.create({
	baseURL: "https://api.yelp.com/v3/businesses",
	headers: {
		Authorization:
			"Bearer g6aqmhTD7I6vSm8cxDt_D6sckr0EME98qVarowNABLVS2ZXbxDrl1wK4wF_6sU6aBJgAn-3jJEvbrm7FGKpRxKOVO5uoDwHRGGpZ0M4N9OSKYl4AyeVSqaQOdiVXXnYx"
	}
});