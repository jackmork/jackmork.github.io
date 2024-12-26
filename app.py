from dash import callback_context, Dash, html, dcc, Input, Output
import dash_bootstrap_components as dbc
from pages import home, music, news, art

app = Dash(__name__)

app.layout = dbc.Container(
    children=[
        dcc.Location(id='url',refresh=False),
        dbc.Container(
            html.H1("Mork's Kingdom", 
                className = 'kings-greeting')
            ),
        dbc.Container(
            children=[
                html.Button("Home", 
                            id='home-bttn',
                            className='navigation-button'),    
                html.Button("Music", 
                            id = 'music-bttn',
                            className='navigation-button'),  
                html.Button("Art", 
                            id='art-bttn',
                            className='navigation-button'),  
                html.Button("News", 
                            id='news-bttn',
                            className='navigation-button')],
            fluid=True,
            className='header-container'),
        html.Div(id='page-content')
        ]
    )

@app.callback(
    [Output('url', 'pathname'),
     Output('page-content', 'children')],
    [Input('home-bttn', 'n_clicks'),
     Input('music-bttn', 'n_clicks'),
     Input('art-bttn', 'n_clicks'),
     Input('news-bttn', 'n_clicks'),
     Input('url', 'pathname')]  # Include URL to check current page
)
def navigate_and_display(btn1, btn2, btn3, btn4, pathname):
    ctx = callback_context
    if not ctx.triggered:
        return '/'
    button_id = ctx.triggered[0]['prop_id'].split('.')[0]
    
    # Default to 0 if buttons haven't been clicked yet
    btn1 = btn1 if btn1 else 0
    btn2 = btn2 if btn2 else 0
    btn3 = btn3 if btn3 else 0
    btn4 = btn4 if btn4 else 0

    # Determine which button was clicked to navigate
    if button_id == 'home-bttn':
        new_pathname = '/home'
        page_content = home.home_page  # Render layout from `home.py`
    elif button_id == 'music-bttn':
        new_pathname = '/music'
        page_content = music.music_page  # Render layout from `music.py`
    elif button_id == 'art-bttn':
        new_pathname = '/art'
        page_content = art.art_page  # Render layout from `music.py`
    elif button_id == 'news-bttn':
        new_pathname = '/news'
        page_content = news.news_page  # Render layout from `music.py`
    else:
        new_pathname = '/'
        page_content = home.home_page

    # Return the new pathname and the page content
    return new_pathname, page_content



if __name__ == "__main__":
    app.run_server(debug=True, port=8050)