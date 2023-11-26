// import useSWR, { mutate } from 'swr';
import useSWRImmutable from 'swr/immutable';
import axios from 'axios';

interface Komunitas {
  id: string;
  nama_komunitas: string;
  logo_komunitas: string;
  pesan_belum_dibaca: number;
}

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export function getDataServer(url: string) {
  const { data: komonitas, error, isLoading } = useSWRImmutable<Komunitas[]>(url, fetcher);

  return { komonitas, error, isLoading };
}
