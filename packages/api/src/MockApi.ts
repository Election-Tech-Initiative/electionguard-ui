import Api from "./Api";

export default class MockApi implements Api {
    healthCheck = () => true;
}