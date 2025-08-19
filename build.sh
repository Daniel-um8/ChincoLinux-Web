#!/usr/bin/env bash
# This script builds the ChincoLinux web application.
set -o errexit  # Exit on error
pip install -r requirements.txt  # Install dependencies
python manage.py collectstatic --noinput  # Collect static files
python manage.py migrate  # Apply database migrations