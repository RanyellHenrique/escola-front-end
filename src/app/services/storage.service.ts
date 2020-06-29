import { STORAGE_KEYS } from './../config/storage.keys.config';
import { Injectable } from '@angular/core';
import { LocalUser } from '../model/local_user';


@Injectable()
export class StorageService {

    getLocalUser(): LocalUser {
        const usr = localStorage.getItem(STORAGE_KEYS.localUser);
        if (usr == null) {
            return null;
        }
        else {
            return JSON.parse(usr);
        }
    }

    setLocalUser(obj: LocalUser): void {
        if (obj == null) {
            localStorage.removeItem(STORAGE_KEYS.localUser);
        }
        else {
            localStorage.setItem(STORAGE_KEYS.localUser, JSON.stringify(obj));
        }
    }
}
