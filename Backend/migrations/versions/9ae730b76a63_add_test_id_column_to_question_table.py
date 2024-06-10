"""Add test_id column to Question table

Revision ID: 9ae730b76a63
Revises: 307c1abefa0c
Create Date: 2024-06-08 05:43:50.918223

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '9ae730b76a63'
down_revision = '307c1abefa0c'
branch_labels = None
depends_on = None


def upgrade():
    # Using batch mode to handle SQLite limitations
    with op.batch_alter_table('question', schema=None) as batch_op:
        batch_op.add_column(sa.Column('test_id', sa.Integer(), nullable=True))
        batch_op.create_foreign_key(
            'fk_question_test_id_test',
            'test',
            ['test_id'],
            ['id'],
            ondelete='CASCADE'
        )

def downgrade():
    with op.batch_alter_table('question', schema=None) as batch_op:
        batch_op.drop_constraint('fk_question_test_id_test', type_='foreignkey')
        batch_op.drop_column('test_id')