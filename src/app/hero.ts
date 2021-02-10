export interface Hero {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: String;
    };
  };
  website: string;
  phone: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
  skills: string[];
}
