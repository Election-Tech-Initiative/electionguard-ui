import Permission from './permission';
import Role from './role';

export default interface UserInfo {
    name: string;
    roles: Role[];
    permissions: Permission[];
}
