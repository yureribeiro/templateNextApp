import { redirect } from "next/navigation";
import styles from "./page.module.css";


export default async function Login() {
  const handleSubmit = async (formData: FormData) => {
    'use server'
    const email = formData.get('email')
    const password = formData.get('password')

    try {
      
      console.log(email, password);
    } catch (error) {
      console.log(error);
    }


   redirect('/dashboard')
  }    

  return (
    <main className={styles.main}>
     <h1>LOGIN</h1>
     <form action={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input type="text" name="email" id="email" />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="password" />
     <button type="submit">Entrar</button>
     </form>
    </main>
  );
}
