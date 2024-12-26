from dash import callback_context, Dash, html, dcc, Input, Output
import dash_bootstrap_components as dbc

home_page = dbc.Container(
    children=[
        dbc.Container(
            children=[
                html.P("Audiovisuals From My First Live Performance"),
                html.Iframe(
                    width="492",
                    height="378",
                    src="https://www.youtube.com/embed/lX30zbZIAGU?si=dYJeA-kgScLAXWEV"
                )
            ],
            className='home-content'
        ),
        dbc.Container(
            children=[
                html.P("A Short, Esoteric Slasher Film"),
                html.Iframe(
                    width="492",
                    height="378",
                    src="https://www.youtube.com/embed/5GZmiO-6Xx8"
                )
            ],
            className='home-content')
    ]
)