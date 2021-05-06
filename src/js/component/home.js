import React from "react";

//create your first component
export function Home() {
	return (
		// Contenedor del to-do list
		<div className="container">
			{/* Titulo del to-do list */}
			<h1 className="titulo">To-do list</h1>
			<ul className="list-group">
				{/* Form agregar tarea */}
				<li className="list-group-item">
					<form>
						<div className="form-row align-items-center">
							<div className="col-11">
								<label
									className="sr-only"
									for="inlineFormInput">
									Name
								</label>
								<input
									type="text"
									class="form-control mb-2"
									id="inlineFormInput"
									placeholder="Nueva tarea"></input>{" "}
							</div>
							<div className="col-1">
								<button
									type="submit"
									className="btn btn-primary mb-2">
									⬇️
								</button>
							</div>
						</div>
					</form>

					<li className="list-group-item">
						A second item{" "}
						<button className="borrar.tarea">X</button>
					</li>
					<li className="list-group-item">A third item</li>
					<li className="list-group-item">A fourth item</li>
					<li className="list-group-item">And a fifth one</li>
				</li>
				<footer>. </footer>
			</ul>
		</div>
	);
}
