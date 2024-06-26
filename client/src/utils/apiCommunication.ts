import { userOperations } from "./userData";

interface apiRequestValues {
  name?: string;
  email: string;
  password: string;
}

const apiRequest = (
  url: string,
  values: apiRequestValues
): Promise<{ error: boolean; description: string }> => {
  const bodyParameters =
    url === "register"
      ? { name: values.name, email: values.email, password: values.password }
      : { email: values.email, password: values.password };

  return new Promise((resolve, reject) => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyParameters),
      credentials: "omit",
    })
      .then((response) => {
        return response.json();
      })
      .then((info) => {
        if (info.status >= 400) {
          resolve({
            error: true,
            description: info.description,
          });
        } else if (info.status >= 200 && info.status < 300) {
          userOperations.setItem("name", info.data.name);
          userOperations.setItem("email", info.data.email);
          resolve({
            error: false,
            description:
              "Everything went well and you are registered in our system",
          });
        } else {
          resolve({
            error: true,
            description:
              "You have retried many times. Please try again after 10 minutes",
          });
        }
      })
      .catch((error) => {
        console.error("Error: ", error);
        resolve({
          error: true,
          description: `Error "${error.message}" occurred while processing your request`,
        });
      });
  });
};

export default apiRequest;
