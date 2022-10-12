import { useEffect, useState } from "react";

interface FormState {
  username: string;
  password: string;
}

interface FormError {
  username?: string;
  password?: string;
}

function App() {
  const [formState, setFormState] = useState<FormState>({
    username: "",
    password: "",
  });
  const [formError, setFormError] = useState<FormError>({});

  useEffect(() => {
    if (formState.username.length < 8) {
      setFormError((formError) => ({ ...formError, username: "invalid username length" }));
    } else {
      setFormError((formError) => ({ ...formError, username: undefined }));
    }
  }, [formState]);

  return (
    <div className="App">
      <form>
        <h3>This is Demo Form</h3>
        <div>
          <label htmlFor="demo-username">username</label>
          <input
            type="text"
            id="demo-username"
            value={formState.username}
            onChange={(e) => setFormState({ ...formState, username: e.target.value })}
          />
          {formError.username && <p>{formError.username}</p>}
        </div>
        <div>
          <label htmlFor="demo-password">password</label>
          <input
            type="password"
            id="demo-password"
            value={formState.password}
            onChange={(e) => setFormState({ ...formState, password: e.target.value })}
          />
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}

export default App;
