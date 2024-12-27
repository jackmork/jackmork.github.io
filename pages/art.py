from dash import html, dcc
import dash_bootstrap_components as dbc


art_page = html.Div(
    children=[
        dbc.Container(
            children=[
                html.Img(
                    src='../assets/instagram_picture.png',
                    style={'width': '200px', 'height': '200px'}),
                html.A(
                    children="Visionary Module Instagram Page",
                    href='https://www.instagram.com/visionary_module/',
                    target='_blank',
                    style={'white-space': 'nowrap'})],
            className='art-content'
            ),
        dbc.Container(
            children=[
                html.Img(
                    src='../assets/youtube_picture.png',
                    style={'width': '250px', 'height': '200px'}),
                html.A(
                    children="Visionary Module Youtube Channel",
                    href='https://www.youtube.com/@VisionaryModule',
                    target='_blank',
                    style={'white-space': 'nowrap'})
                    ],
            className='art-content'
            )
    ],
)