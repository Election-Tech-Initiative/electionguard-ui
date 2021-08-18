import Permission from './permission';
import Role from './role';
import User from './user';

export default interface UserInfo extends User {
    roles: Role[];
    permissions: Permission[];
}
