import Permission from './permission';
import Role from './role';
import User from './user';

/**
 * @interface UserInfo added roles and permissions to the base user information
 * @extends User
 */
export default interface UserInfo extends User {
    roles: Role[];
    permissions: Permission[];
}
