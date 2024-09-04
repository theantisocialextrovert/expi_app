import React from "react";
import './Asking.css';

/**
 * Asking component for proposing the Valentine's Day question.
 *
 * @param {string} gif - The URL or import path of the chosen gif.
 * @param {string} altText - The alt text for the displayed gif.
 * @param {function} handleAccept - Callback function for accepting the proposal.
 * @param {function} handleReject - Callback function for rejecting the proposal.
 * @param {string} noButtonText - The text to be displayed on the rejection button.
 * @returns {JSX.Element} JSX element representing the Asking component.
 */
const Asking = ({ gif, altText, handleAccept, handleReject, noButtonText }) => (
  <>
    {/* Displaying the chosen gif with alt text */}
    <div >
    <img className="App-gif"  src={gif} alt={altText} />
    </div>
    
    {/* Asking the special question with personalized name */}

    <div className="App-text">Naina, will you say yes to me at the Airport?</div>
    <div>
      {/* Button for accepting the proposal */}
      <button className="App-button" onClick={handleAccept}>
        Yes
      </button>
      {/* Button for rejecting the proposal with dynamic text */}
      <button className="App-button" onClick={handleReject}>
        {noButtonText}
      </button>
    </div>
  </>
);

export default Asking;
