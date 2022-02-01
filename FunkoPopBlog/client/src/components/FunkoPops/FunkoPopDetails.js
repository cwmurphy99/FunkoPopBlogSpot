import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Card, CardHeader, CardBody, CardFooter, CardImg } from "reactstrap";
import { getFunkoById } from "../../modules/FunkoPopManager";

export const FunkoPopDetails = () => {
    const [funko, setFunko] = useState();
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        getFunkoById(id).then(setFunko);
    }, [id])

    if (!funko) {
        return null
    }

    return (
        <div className="funkoDetailsCard">
            <h2>FunkoPop! Details</h2>
            <Card>
                <CardHeader>
                    <strong>{funko.title}</strong>
                </CardHeader>
                <CardImg src={funko.image} />

                {funko.series ?
                    <CardFooter>
                        <strong>Series:</strong> {funko.series}
                    </CardFooter>
                    : null}
            </Card>
        </div>
    )
}