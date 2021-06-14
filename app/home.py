import functools

from flask import (
    Blueprint, flash, g, redirect, render_template, request, session, url_for
)
from werkzeug.exceptions import abort


bp = Blueprint('home', __name__)


@bp.route('/')
def home():
    return render_template('home/home.html')