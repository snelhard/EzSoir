import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';
import Message from "../Components/Message";

let message;
let button;
const tmp = {
    data : {
        texte: "texte",
    }
}
const renvoiIdSuivant = jest.fn();

describe('Message', () => {
    beforeEach(() => {
        message = render(
            <MemoryRouter>
                <Message renvoiIdSuivant={renvoiIdSuivant} details={tmp}/>
            </MemoryRouter>
        );
        button = message.getByTestId('button');
    });

    it('Affichage du message', () => {
        expect(message.getByTestId('texte').textContent).toEqual(tmp.data.texte);
    });

    it('Click suivant', () => {
        fireEvent.click(button);
        expect(renvoiIdSuivant).toHaveBeenCalledTimes(1);
        expect(renvoiIdSuivant).toHaveBeenCalledWith(0);
    });

    afterEach(() => {
        cleanup();
        renvoiIdSuivant.mockClear();
    });
});