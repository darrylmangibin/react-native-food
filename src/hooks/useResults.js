import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
	const [errorMessage, setErrorMessage] = useState("");

	const [results, setResults] = useState([]);

	const searchApi = async searchTerm => {
		try {
			const res = await yelp.get("/search", {
				params: {
					limit: 50,
					term: searchTerm,
					location: "Baguio, Benguet"
				}
			});
			setResults(res.data.businesses);
		} catch (err) {
			setErrorMessage("Something went wrong!");
		}
	};

	useEffect(() => {
		searchApi("");
  }, []);
  return [searchApi, results, errorMessage]
};
