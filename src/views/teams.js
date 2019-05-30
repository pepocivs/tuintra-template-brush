import React from 'react';

export default class Teams extends React.Component {
	constructor(props) {
		super(props);
		this.teams = props.teams;
	}
	
	render() {
		const width = { width: '250px' };
		return (
			<div>
        <h2>Equipos</h2>
        {this.teams.map(team => {
          return (
            <div key={team._id}>
              <h2>{ team.teamName }</h2>
              <p>{team.category} {team.gender}</p>
							<img style={width} src={team.picture} />
            </div>
          );
        })}
      </div>
		)
	}
}

