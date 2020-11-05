import * as Flags from "../../types/Flags";

import { ResourceContainer } from "../ResourceContainer";
import { StatsContainer } from "../StatsContainer";
import { MessagesContainer } from "../MessagesContainer";
import { Game } from "../Game";

import { ModalButton } from "./Modal";

import React from "react";

interface SidebarProps {
  game: Game;
}

export class Sidebar extends React.Component<SidebarProps> {
  render() {
    const game = this.props.game;
    return (
      <div id="sidebar" className="sidebar d-flex flex-column z-0">
        <div className="row flex-row">
          <ModalButton className="col-auto nf nf-cogs" modalId="settings">
            <i className="nf nf-cogs" />
          </ModalButton>
          <button
            aria-label={game.flags.get(Flags.Paused.Instance) ? "resume" : "pause"}
            className={"btn btn-primary col-auto"}
            onClick={game.togglePause.bind(game)}
          >
            <i className={"nf nf-" + (game.flags.get(Flags.Paused.Instance) ? "play" : "pause")} />
          </button>
        </div>
        {game.flags.get(Flags.AlterTime.Instance) ? (
          <>
            <div className="sidebar-divider row" />
            <input className="form-control row" type="number" placeholder="Time factor" onInput={game.trySetTimeFactor.bind(game)} />
          </>
        ) : (
          <></>
        )}
        {this.props.game.resources.length > 0 ? <div className="sidebar-divider row" /> : <></>}
        <ResourceContainer resources={game.resources} />
        <div className="sidebar-divider row" />
        <StatsContainer time={game.time} player={game.player} />
        <div className="sidebar-divider row" />
        <MessagesContainer messages={game.messages} />
      </div>
    );
  }
}

export default Sidebar;
