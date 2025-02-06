import { Injectable } from '@angular/core';
import { Auth, User } from '@angular/fire/auth';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from '@firebase/auth';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private buzon = new BehaviorSubject<User | null>(null);
  user$ = this.buzon.asObservable();

  constructor(private auth: Auth) { 
    onAuthStateChanged(this.auth, (user) => {
      this.buzon.next(user);
    });
  }

  async login(email:string, password:string): Promise<void> {
    await signInWithEmailAndPassword(this.auth, email, password);
    console.log('Usuario logueado');
  }

  async registro(email:string, password:string): Promise<void> {
    await createUserWithEmailAndPassword(this.auth, email, password);
    console.log('Usuario registrado');
  }

  async logout(): Promise<void> {
    await this.auth.signOut();
    console.log('Usuario deslogueado');
  }

}
