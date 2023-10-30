interface userData{
    id: number,
    name: string,
    email: string,
    title:string,
    image:string
}

type StaffListProps = {
  data: userData[];
};
