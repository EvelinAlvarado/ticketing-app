import React from "react";

interface TicketPageProps {
  params: {
    id: string;
  };
}

const TicketPage = ({ params }: TicketPageProps): React.ReactElement => {
  return <div className="bg-page">TicketPage {params.id}</div>;
};

export default TicketPage;
