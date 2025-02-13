import type { Fares } from "./types";

export const stations: string[] = [
  "Uttara North",
  "Uttara Center",
  "Uttara South",
  "Pallabi",
  "Mirpur 11",
  "Mirpur 10",
  "Kazipara",
  "Shewrapara",
  "Agargaon",
  "Bijoy Sarani",
  "Farmgate",
  "Karwan Bazar",
  "Shahbag",
  "Dhaka University",
  "Bangladesh Secretariat",
  "Motijheel",
];

export const fares: Fares = {
  "Uttara North": {
    "Uttara Center": 20,
    "Uttara South": 20,
    Pallabi: 30,
    "Mirpur 11": 30,
    "Mirpur 10": 40,
    Kazipara: 40,
    Shewrapara: 50,
    Agargaon: 60,
    "Bijoy Sarani": 60,
    Farmgate: 70,
    "Karwan Bazar": 80,
    Shahbag: 80,
    "Dhaka University": 90,
    "Bangladesh Secretariat": 90,
    Motijheel: 100,
  },
  "Uttara Center": {
    "Uttara North": 20,
    "Uttara South": 20,
    Pallabi: 20,
    "Mirpur 11": 30,
    "Mirpur 10": 30,
    Kazipara: 40,
    Shewrapara: 40,
    Agargaon: 50,
    "Bijoy Sarani": 60,
    Farmgate: 60,
    "Karwan Bazar": 70,
    Shahbag: 80,
    "Dhaka University": 80,
    "Bangladesh Secretariat": 90,
    Motijheel: 90,
  },
  "Uttara South": {
    "Uttara North": 20,
    "Uttara Center": 20,
    Pallabi: 20,
    "Mirpur 11": 20,
    "Mirpur 10": 30,
    Kazipara: 30,
    Shewrapara: 40,
    Agargaon: 40,
    "Bijoy Sarani": 50,
    Farmgate: 60,
    "Karwan Bazar": 60,
    Shahbag: 70,
    "Dhaka University": 70,
    "Bangladesh Secretariat": 80,
    Motijheel: 90,
  },
  Pallabi: {
    "Uttara North": 30,
    "Uttara Center": 20,
    "Uttara South": 20,
    "Mirpur 11": 20,
    "Mirpur 10": 20,
    Kazipara: 20,
    Shewrapara: 30,
    Agargaon: 30,
    "Bijoy Sarani": 40,
    Farmgate: 50,
    "Karwan Bazar": 50,
    Shahbag: 60,
    "Dhaka University": 60,
    "Bangladesh Secretariat": 70,
    Motijheel: 80,
  },
  "Mirpur 11": {
    "Uttara North": 30,
    "Uttara Center": 30,
    "Uttara South": 20,
    Pallabi: 20,
    "Mirpur 10": 20,
    Kazipara: 20,
    Shewrapara: 20,
    Agargaon: 30,
    "Bijoy Sarani": 40,
    Farmgate: 40,
    "Karwan Bazar": 50,
    Shahbag: 50,
    "Dhaka University": 60,
    "Bangladesh Secretariat": 70,
    Motijheel: 70,
  },
  "Mirpur 10": {
    "Uttara North": 40,
    "Uttara Center": 30,
    "Uttara South": 30,
    Pallabi: 20,
    "Mirpur 11": 20,
    Kazipara: 20,
    Shewrapara: 20,
    Agargaon: 20,
    "Bijoy Sarani": 30,
    Farmgate: 30,
    "Karwan Bazar": 40,
    Shahbag: 50,
    "Dhaka University": 50,
    "Bangladesh Secretariat": 60,
    Motijheel: 60,
  },
  Kazipara: {
    "Uttara North": 40,
    "Uttara Center": 40,
    "Uttara South": 30,
    Pallabi: 20,
    "Mirpur 11": 20,
    "Mirpur 10": 20,
    Shewrapara: 20,
    Agargaon: 20,
    "Bijoy Sarani": 20,
    Farmgate: 30,
    "Karwan Bazar": 40,
    Shahbag: 40,
    "Dhaka University": 50,
    "Bangladesh Secretariat": 50,
    Motijheel: 60,
  },
  Shewrapara: {
    "Uttara North": 50,
    "Uttara Center": 40,
    "Uttara South": 40,
    Pallabi: 30,
    "Mirpur 11": 30,
    "Mirpur 10": 20,
    Kazipara: 20,
    Agargaon: 20,
    "Bijoy Sarani": 20,
    Farmgate: 20,
    "Karwan Bazar": 30,
    Shahbag: 40,
    "Dhaka University": 40,
    "Bangladesh Secretariat": 50,
    Motijheel: 50,
  },
  Agargaon: {
    "Uttara North": 60,
    "Uttara Center": 50,
    "Uttara South": 40,
    Pallabi: 30,
    "Mirpur 11": 30,
    "Mirpur 10": 20,
    Kazipara: 20,
    Shewrapara: 20,
    "Bijoy Sarani": 20,
    Farmgate: 20,
    "Karwan Bazar": 20,
    Shahbag: 30,
    "Dhaka University": 30,
    "Bangladesh Secretariat": 40,
    Motijheel: 50,
  },
  "Bijoy Sarani": {
    "Uttara North": 60,
    "Uttara Center": 60,
    "Uttara South": 50,
    Pallabi: 40,
    "Mirpur 11": 40,
    "Mirpur 10": 30,
    Kazipara: 20,
    Shewrapara: 20,
    Agargaon: 20,
    Farmgate: 20,
    "Karwan Bazar": 20,
    Shahbag: 20,
    "Dhaka University": 20,
    "Bangladesh Secretariat": 40,
    Motijheel: 50,
  },
  Farmgate: {
    "Uttara North": 70,
    "Uttara Center": 60,
    "Uttara South": 60,
    Pallabi: 50,
    "Mirpur 11": 40,
    "Mirpur 10": 30,
    Kazipara: 30,
    Shewrapara: 20,
    Agargaon: 20,
    "Bijoy Sarani": 20,
    "Karwan Bazar": 20,
    Shahbag: 20,
    "Dhaka University": 20,
    "Bangladesh Secretariat": 30,
    Motijheel: 30,
  },
  "Karwan Bazar": {
    "Uttara North": 80,
    "Uttara Center": 70,
    "Uttara South": 60,
    Pallabi: 50,
    "Mirpur 11": 50,
    "Mirpur 10": 40,
    Kazipara: 40,
    Shewrapara: 30,
    Agargaon: 20,
    "Bijoy Sarani": 20,
    Farmgate: 20,
    Shahbag: 20,
    "Dhaka University": 20,
    "Bangladesh Secretariat": 20,
    Motijheel: 30,
  },
  Shahbag: {
    "Uttara North": 80,
    "Uttara Center": 80,
    "Uttara South": 70,
    Pallabi: 60,
    "Mirpur 11": 50,
    "Mirpur 10": 50,
    Kazipara: 40,
    Shewrapara: 40,
    Agargaon: 30,
    "Bijoy Sarani": 20,
    Farmgate: 20,
    "Karwan Bazar": 20,
    "Dhaka University": 20,
    "Bangladesh Secretariat": 20,
    Motijheel: 30,
  },
  "Dhaka University": {
    "Uttara North": 90,
    "Uttara Center": 80,
    "Uttara South": 70,
    Pallabi: 60,
    "Mirpur 11": 60,
    "Mirpur 10": 50,
    Kazipara: 50,
    Shewrapara: 40,
    Agargaon: 30,
    "Bijoy Sarani": 30,
    Farmgate: 20,
    "Karwan Bazar": 20,
    Shahbag: 20,
    "Bangladesh Secretariat": 20,
    Motijheel: 20,
  },
  "Bangladesh Secretariat": {
    "Uttara North": 90,
    "Uttara Center": 90,
    "Uttara South": 80,
    Pallabi: 70,
    "Mirpur 11": 70,
    "Mirpur 10": 60,
    Kazipara: 50,
    Shewrapara: 50,
    Agargaon: 40,
    "Bijoy Sarani": 40,
    Farmgate: 30,
    "Karwan Bazar": 20,
    Shahbag: 20,
    "Dhaka University": 20,
    Motijheel: 20,
  },
  Motijheel: {
    "Uttara North": 100,
    "Uttara Center": 90,
    "Uttara South": 90,
    Pallabi: 80,
    "Mirpur 11": 70,
    "Mirpur 10": 60,
    Kazipara: 60,
    Shewrapara: 50,
    Agargaon: 50,
    "Bijoy Sarani": 40,
    Farmgate: 30,
    "Karwan Bazar": 30,
    Shahbag: 20,
    "Dhaka University": 20,
    "Bangladesh Secretariat": 20,
  },
};
