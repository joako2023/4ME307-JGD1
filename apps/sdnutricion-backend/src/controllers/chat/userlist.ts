export class ChatUserList {
    private listUser = [] as wssUserModel[];

    add(user: wssUserModel) {
        this.listUser.push({ ...user });
        return user;
    }

    delete(wsId: string) {
        this.listUser = this.listUser.filter((i) => i.wsId === wsId);
    }

    getList() {
        return this.listUser;
    }

    getUser(id: number) {
        return this.listUser.find((u) => u.idUser === id);
    }

    update(user: Partial<wssUserModel>) {
        this.listUser.map((u) => (u.idUser === user.idUser ? user : u));
    }

    getByRol(rol: string) {
        return this.listUser.filter((u) => u.rol.includes(rol));
    }
}

export interface wssUserModel {
    wsId: string;
    username: string;
    idUser: number;
    sala: string;
    rol: string;
}

export interface message {
    message: string;
    for: string;
    from: string;
    group: string;
    type: string;
}